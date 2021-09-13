import { Card, CardHeader, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as df from 'utils';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 300,
    alignSelf: 'center',
    fontFamily: 'Montserrat',
    marginBottom: 24,
    position: 'relative'
  },
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
  avatar: {
    backgroundColor: 'red',
  },
  channelBadge: {
    maxWidth: 70,
    minWidth: 28,
    backgroundColor: '#eee',
    fontSize: 14,
    position: 'absolute',
    top: 4,
    right: 4
  }
}));

const EventListItem = (props: any) => {

  const {
    GameId = 12345,
    Season = 2021,
    Status = 'Final',
    DateTime = '2020-12-22T19:00:00',
    StadiumID = 8,
    Channel = 'TNT',
    HomeTeam = 'ABC',
    AwayTeam = 'DEF',
    HomeTeamScore = '',
    AwayTeamScore = '',
  } = props;

  const classes = useStyles();

  return (

    <Card className={classes.root}>
      <Card
        className={classes.channelBadge}
      >
        <CardContent
        >
          {Channel || 'N/A'}
        </CardContent>
      </Card>
      <CardHeader
        title={HomeTeam + ' | ' + AwayTeam}
        subheader={df.formatEventDate(DateTime)}
      />
      <CardHeader 
      subheader={HomeTeamScore && `${HomeTeamScore} - ${AwayTeamScore}`}
      />


    </Card>
  )
}
export default EventListItem;