import { Modal } from './UI/Modal';
import { Map } from './UI/Map';
import { getCoordsFromAddress, getAddressFromCoordinates } from './Utility/Location';

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');
    this.shareBtn = document.getElementById('share-btn');
    this.sharedLinkInputEl = document.getElementById('share-link');

    locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
    this.shareBtn.addEventListener('click', this.sharePlaceHandler.bind(this));
    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
  }

  sharePlaceHandler() {
    if(!navigator.clipboard) {
      this.sharedLinkInputEl.select();
      return;
    }

    navigator.clipboard.writeText(this.sharedLinkInputEl.value)
    .then(() => {
      alert('Copied!')
    })
    .catch(error => {
      console.error(error);
      this.sharedLinkInputEl.select();
    });
  }

  selectPlace(coordinates, address) {
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }

    this.shareBtn.disabled = false;
    this.sharedLinkInputEl.value = `${location.origin}/my-place?address=${encodeURI(address)}&lat=${coordinates.lat}&lng=${coordinates.lng}`;
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert(
        'Location feature not available in your browser - please use a mora modern browser or enter an address manually!'
      );
      return;
    }

    const modal = new Modal(
      'loading-modal-content',
      'Loading location - please wait!'
    );
    modal.show();

    navigator.geolocation.getCurrentPosition(
      async successResult => {
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude,
        };
        
        const address = await getAddressFromCoordinates(coordinates);
        this.selectPlace(coordinates);
        modal.hide();
      },
      error => {
        modal.hide();
        alert('Could not locate you. Please enter an address manually!');
      }
    );
  }

  async findAddressHandler(event) {
    event.preventDefault();
    const address = event.target.querySelector('input').value;

    if (!address || address.trim().length === 0) {
      console.log('Please enter a valid address');
    }

    const modal = new Modal(
      'loading-modal-content',
      'Loading location - please wait!'
    );

    modal.show();

    try {
      const coordinates = await getCoordsFromAddress(address);
      this.selectPlace(coordinates, address);
    } catch(error) {
      console.error(error.message);
    }

    modal.hide();
  }
}

new PlaceFinder();
