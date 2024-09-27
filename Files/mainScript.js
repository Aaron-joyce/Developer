const scrollwatch = document.createElement('span')
scrollwatch.setAttribute('data-scroll-watcher', '');

$(".navbar")[0].before(scrollwatch);

const navObserver = new IntersectionObserver((entries) =>
{
    $(".navbar")[0].classList.toggle('sticking', !entries[0].isIntersecting);
});
navObserver.observe(scrollwatch);  

$(document).ready(function(){
    $.ajax({
        type:"GET",
        url:"./Files/projects.xml",
        dataType:"xml",
        success:function(xml){
            let projects = []
            $(xml).find('PROJECT').each(function(){
                const name = $(this).find('NAME').text();
                const desc = $(this).find('DESCRIPTION').text();
                const link = $(this).find('LINK').text();
                const image = $(this).find('IMAGE').text();
                
                projects.push({name, desc, link, image});
            })

            function addProjects(){
                $(`#project-container`).empty();
                projects.forEach(project=>{
                    $('#project-container').append(`
                        <div class="project-card" style="background-image:url(${project.image});">
                            <div class="project-wrapper">
                                <h2 class="project-name">${project.name}</h2>
                                <div class="project-details">
                                    <p class="detail-text">${project.desc}</p>
                                    <button class="project-link-btn"><a href="${project.link}" class="project-link">See Project</a></button>
                                </div>
                            </div>
                        </div>`);
                })
            }

            addProjects();
            $(".project-card").on('click', function() {
                $(".project-card").removeClass('expand-card');
                $(this).addClass('expand-card');
            });
        },
        error:function(xhr, request, error){
            var err = eval("(" + xhr.responseText + ")");
            console.log(err.Message);
            $('#project-container').append("<h1>Error loading Projects data</h1>'");
        }
    })
})

function validate(event){
    event.preventDefault();
    var isvalid = true;
    var mailpattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if($("#txt-name").val() == ""|| $("#txt-name").val().length < 5){
        isvalid = false;
    }
    if(!mailpattern.test($('#txt-mail').val())){
        isvalid = false
    }
    if($('#txt-msg').val() == ''){
        isvalid = false
    }

    if(isvalid){
        $('#contact-form')[0].submit();
        $('.error-msg').css('visibility','hidden')
    }
    else{
        $('.error-msg').css('visibility','visible')
    }
}   