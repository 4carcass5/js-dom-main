export default () => {
  // BEGIN
  
  const tabContainers = document.querySelectorAll('.row');
  tabContainers.forEach((tabList) => {

    const tabs = tabList.querySelectorAll('[role="tab"]');
    tabs.forEach((tab) => {

      tab.addEventListener('click', (e) => {
        
        e.preventDefault();

        const activeTab = tabList.querySelector('.active.nav-link');
        const activeContent = tabList.querySelector('.active.tab-pane');
        const targetTab = tabList.querySelector(tab.dataset.bsTarget);
        
        activeTab.classList.remove('active');
        activeContent.classList.remove('active');

        targetTab.classList.add('active');
        tab.classList.add('active');
        
       
        console.log(`Clicked tab "${tab.innerText}".`);
      })
    })
  })

  // END
};