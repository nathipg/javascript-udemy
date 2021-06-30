import DOMHelper from '../Utility/DOMHelper';
// import Tooltip from './Tooltip';

export default class ProjectItem {
  constructor(id, updateProjectListsHandler, type) {
    this.id = id;
    this.hasActiveTooltip = false;
    this.updateProjectListsHandler = updateProjectListsHandler;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
    this.connectDrag();
  }

  showMoreInfoHandler() {
    if (this.hasActiveTooltip) {
      return;
    }

    const projectElement = document.getElementById(this.id);
    const tooltipText = projectElement.dataset.extraInfo;
    import('./Tooltip.js').then(module => {
      const tooltip = new module.Tooltip(
        () => {
          this.hasActiveTooltip = false;
        },
        tooltipText,
        this.id
      );
      tooltip.attach();
      this.hasActiveTooltip = true;
    });
  }

  connectDrag() {
    const item = document.getElementById(this.id);

    item.addEventListener('dragstart', event => {
      event.dataTransfer.setData('text/plain', this.id);
      event.dataTransfer.effectAllowed = 'move';
    });

    item.addEventListener('dragend', event => {
      console.log(event);
    });
  }

  connectMoreInfoButton() {
    const projectItemEl = document.getElementById(this.id);
    const moreInfohBtn = projectItemEl.querySelector('button:first-of-type');
    moreInfohBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));
  }

  connectSwitchButton(type) {
    const projectItemEl = document.getElementById(this.id);
    let switchBtn = projectItemEl.querySelector('button:last-of-type');
    switchBtn = DOMHelper.clearEventListeners(switchBtn);
    switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
    switchBtn.addEventListener(
      'click',
      this.updateProjectListsHandler.bind(null, this.id)
    );
  }

  update(updateProjectListsHandler, type) {
    this.updateProjectListsHandler = updateProjectListsHandler;
    this.connectSwitchButton(type);
  }
}
