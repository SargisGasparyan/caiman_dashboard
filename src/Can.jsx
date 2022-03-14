import { hasPermissions } from './helpers/general';

function Can({
  IF, children,
}) {
  const { path, can } = IF;

  if (hasPermissions(path, can)) return <>{children}</>;

  return null;
}

export default Can;
