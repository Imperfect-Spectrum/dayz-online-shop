import { makeAutoObservable } from 'mobx';

class SteamStore {
  steamID: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setSteamID = (id: string) => {
    this.steamID = id;
  };

  getSteamID = () => {
    return this.steamID;
  };
}

export const steamStore = new SteamStore();
