import { Badge } from 'antd';
import { CheckCircleOutlined, ExclamationCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
type Status = 'approved' | 'pending' | 'unread';

interface DotBadgeProps {
  status: Status;
}

const DotBadge: React.FC<DotBadgeProps> = ({ status }) => {
  let badgeColor: 'green' | 'red' | 'default' = 'default';
  let badgeIcon: React.ReactNode = null;

  switch (status) {
    case 'approved':
      badgeColor = 'green';
      badgeIcon = <CheckCircleOutlined />;
      break;
    case 'pending':
      badgeColor = 'red';
      badgeIcon = <ExclamationCircleOutlined />;
      break;
    case 'unread':
      badgeColor = 'default';
      badgeIcon = <ClockCircleOutlined />;
      break;
    default:
      break;
  }

  return <Badge color={badgeColor} />;
};


export default DotBadge;
