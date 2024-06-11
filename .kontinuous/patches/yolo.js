module.exports = function enableAutoMountServiceAccountToken(manifests) {
  return manifests.map(resource => {

      if (resource.kind === 'ServiceAccount') {
          resource.automountServiceAccountToken = true;
      }

      return resource;
  });
}
