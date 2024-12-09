import Native from '../native-types';
/** See https://developer.apple.com/documentation/healthkit/hkhealthstore/1614152-requestauthorization */
const requestAuthorization = async (read, write = []) => {
  const readPermissions = read.reduce((obj, cur) => ({
    ...obj,
    [cur]: true
  }), {});
  const writePermissions = write.reduce((obj, cur) => ({
    ...obj,
    [cur]: true
  }), {});
  return Native.requestAuthorization(writePermissions, readPermissions);
};
export default requestAuthorization;
//# sourceMappingURL=requestAuthorization.js.map