import Native from '../native-types';
const getRequestStatusForAuthorization = async (read, write = []) => {
  const readPermissions = read.reduce((obj, cur) => ({
    ...obj,
    [cur]: true
  }), {});
  const writePermissions = write.reduce((obj, cur) => ({
    ...obj,
    [cur]: true
  }), {});
  return Native.getRequestStatusForAuthorization(writePermissions, readPermissions);
};
export default getRequestStatusForAuthorization;
//# sourceMappingURL=getRequestStatusForAuthorization.js.map