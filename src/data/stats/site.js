import dayjs from 'dayjs';

const data = [
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/yzhang33/yz-personalsite/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
];

export default data;
