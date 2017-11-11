import BaseModel from './BaseModel';

export default class Project extends BaseModel {
    constructor(data = {}) {
        super(data);
        this.projectID = null;
        this.name = null;
        this.description = null;
        this.owner = null;
        this.gatewayId = null;
        // TODO: convert to Date object here instead of doing this in views
        this.creationTime = null;
        this.copyData(data);
    }

    toJSONForCreate() {
        // Remaining fields just get defaulted
        return JSON.stringify(this, ["name", "description"]);
    }

    toJSONForUpdate() {
        return JSON.stringify(this, ["projectID", "name", "description"]);
    }
}