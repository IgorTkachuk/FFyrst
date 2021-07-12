class LocalstorageService {

  setItem(key: string, data: any) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  }

  getItem(key: string) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

}

export default LocalstorageService;
