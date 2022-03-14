/* eslint-disable operator-assignment */
import { USER_ABILITY } from '../configs/ability';
import { USER_ROLES } from '../constants/names';
import { getStoreState } from '../redux/store';

export function hasPermissions(path, can) {
  const { role, permissions } = getStoreState().userInfo;

  if (role === USER_ROLES.ADMIN) return true;
  if (!permissions || !path || !can) return false;

  let ability = 2;
  let hasPermission = false;
  for (const item of path) {
    if (!permissions[item] || !can.length) return false;
    for (const el of can) {
      // eslint-disable-next-line no-bitwise
      ability = ability | USER_ABILITY[el];
      hasPermission = +permissions[item] >= ability;
    }
  }
  return hasPermission;
}
