const { STATE_CONSTANT, ERROR_MESSAGE } = require("../Constants");
const { BridgeMinLength, BridgeMaxLength } = STATE_CONSTANT;

const InputValidator = {
  bridgeSizeValidator(input) {
    this.checkIsNumber(input);
    this.checkNumberRange(input, BridgeMinLength, BridgeMaxLength);
  },
  checkIsNumber(input) {
    if (isNaN(input)) {
      throw new Error(ERROR_MESSAGE.onlyNumber);
    }
  },

  checkNumberRange(input, start, end) {
    if (input < start || input > end) {
      throw new Error(ERROR_MESSAGE.betweenRange);
    }
  },

  retryOrEndValidator(input) {
    if (input !== STATE_CONSTANT.retry && input !== STATE_CONSTANT.end) {
      throw new Error(ERROR_MESSAGE.onlyRetryOrEnd);
    }
  },
};

module.exports = {
  InputValidator,
};
