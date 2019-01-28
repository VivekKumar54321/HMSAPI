export class Visitor {
  constructor(public visitorId?: number, public visitorName?: string, public visitorAddress?: string, public visitorPhoneNo?: string, public visitorEmail?: string) {
    this.visitorId = visitorId;
    this.visitorName = visitorName;
    this.visitorAddress = visitorAddress;
    this.visitorPhoneNo = visitorPhoneNo;
    this.visitorEmail = visitorEmail;
  }
}
