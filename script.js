

const observer = new IntersectionObserver((entries)=>{

    
    entries.forEach(entry=>{
    
        if(entry.isIntersecting){
    
            entry.target.classList.add("show");
    
        }
    
    });
    
    
    });
    
    document
    .querySelectorAll(".hidden")
    .forEach(el=>observer.observe(el));
    
    const form = document.getElementById("emailForm");
    const message = document.getElementById("message");
    
    form.addEventListener("submit", async (e) => {
    
        e.preventDefault();
    
        const data = new FormData(form);
    
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                Accept: "application/json"
            }
        });
    
        if(response.ok){
            message.textContent =
            "Welcome to ZeroSwag. You're on the list.";
            form.reset();
        } else {
            message.textContent =
            "Something went wrong. Try again.";
        }
    
    });