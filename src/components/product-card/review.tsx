import React, { FC, useState, useEffect } from 'react';
import { Stack, Typography, Rating } from '@mui/material';
import {
  Star as StarIcon,
  StarOutline as StarOutlineIcon,
} from '@mui/icons-material';

type Props = {
  rating: number;
};

const Review: FC<Props> = ({ rating }) => {
  const [filledStars, setFilledStars] = useState<number>(0);

  useEffect(() => {
    setFilledStars(Math.round(rating));
  }, [rating]);

  const handleStarHover = (
    event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    if (newValue !== null) {
      setFilledStars(newValue);
    }
  };

  return (
    <Stack direction='row' alignItems='center'>
      <Rating
        value={filledStars}
        max={5}
        icon={<StarIcon style={{ color: 'darkyellow', fontSize: 16 }} />}
        emptyIcon={<StarOutlineIcon style={{ color: 'grey', fontSize: 16 }} />}
        onChange={handleStarHover}
      />
      <Typography ml={0.5} fontSize={16} component='span'>
        ({filledStars})
      </Typography>
    </Stack>
  );
};

export default Review;
