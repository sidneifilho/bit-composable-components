import { NodeAppOptions } from '@teambit/node';

export const statusService: NodeAppOptions = {
  name: 'status-service',
  entry: require.resolve('./status-service.app-root'),
  portRange: [3000, 4000]
};

export default statusService;
