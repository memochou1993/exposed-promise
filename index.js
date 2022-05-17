const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

class ExposedPromise {
  constructor(resolve, reject) {
    this.resolveEvent = resolve;
    this.rejectEvent = reject;
    this.setStatus(PENDING);
  }

  setStatus(status) {
    this.status = status;
  }

  withTimeout(seconds) {
    setTimeout(() => {
      this.reject('Promise timed out');
    }, seconds * 1000);
    return this;
  }

  resolve(res) {
    this.setStatus(RESOLVED);
    this.resolveEvent(res);
  }

  reject(err) {
    this.setStatus(REJECTED);
    this.rejectEvent(err);
  }
}

export default ExposedPromise;
