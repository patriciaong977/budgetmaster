import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  cardContent: {
    paddingTop: 0,
    color: 'blue',
    opacity: 0.8,
    // background: 'linear-gradient(45deg, #eeaeca 30%, #94bbe9 70%)',
  },
  divider: {
    margin: '20px 0',
  },
}));
