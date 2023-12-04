import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material/';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Delete } from '@mui/icons-material';
import { PostT } from '../types/Types';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { updateFormFields, deletePostAsync } from '../redux/store/Actions/PostAction';
import moment from 'moment';

export default function Post({ post }: { post: PostT }) {
  const dispatch: Dispatch = useDispatch();

  const handleMenuClick = () => {
    dispatch(updateFormFields(post));
  };

  const handleDelete  = () => {
    dispatch(deletePostAsync(post));
  };



  return (
    <Card sx={{ height: "fit-content", maxWidth: 345, border: '1px solid #ddd', borderRadius: '8px' }}>
      <CardHeader
        sx={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("${post.picture}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 150,
        }}
        action={
          <>
            <IconButton onClick={handleMenuClick} color="inherit">
              <MoreHorizIcon sx={{ color: 'white' }} />
            </IconButton>
          </>
        }
        title={<Typography variant="h6" sx={{ color: 'white' }}>{post.creator}</Typography>}
        subheader={<Typography variant="subtitle2" sx={{ color: 'white' }}>{moment(post.createdAt).fromNow()}</Typography>}
      />
      <CardContent>
        {post.tags.map((tag, i) => (
          <Typography key={i} color="text.secondary" fontSize="14px" component="span">#{tag} </Typography>
        ))}
        <Typography gutterBottom variant="h5" component="div" margin="1rem 0">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.message}
        </Typography>
      </CardContent>
      <Grid container justifyContent="space-between" sx={{ padding: '10px 8px' }}>
        <Button startIcon={<ThumbUpIcon />}>Like 0</Button>
        <Button startIcon={<Delete />} onClick={() => handleDelete(post)}>Delete</Button>
      </Grid>
    </Card>
  );
}