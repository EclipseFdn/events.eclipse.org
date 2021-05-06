local deployment = import "../../releng/hugo-websites/kube-deployment.jsonnet";

deployment.newProductionDeploymentWithStaging(
  "events.eclipse.org", "events-staging.eclipse.org"
)