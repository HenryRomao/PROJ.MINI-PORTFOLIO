const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener("click", function() {
        if(tab.classList.contains("selected")){
            return;
        }
        
        selectedTab(tab)

        mostrarInformationDaTab(tab)
    });
});

function selectedTab(tab) {
    const tabSelected = document.querySelector(".tab.selected");

    tabSelected.classList.remove("selected");

    tab.classList.add("selected");
}

function mostrarInformationDaTab(tab) {
    const informationSelected = document.querySelector(".information.selected");

    informationSelected.classList.remove("selected");

    const idDoElementoDeInformationDaTab = `information-${tab.id}`;

    const informationASerMostrada = document.getElementById(idDoElementoDeInformationDaTab);
        
    informationASerMostrada.classList.add("selected")
}