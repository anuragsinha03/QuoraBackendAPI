const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class InvalidResourceID extends BaseError {
	constructor(resourceName, resourceId) {
		super(
			"InvalidResourceID",
			StatusCodes.NOT_ACCEPTABLE,
			`${resourceId} is not a valid ${resourceName} ID`,
			{
				resourceName,
				resourceId,
			}
		);
	}
}

module.exports = InvalidResourceID;
