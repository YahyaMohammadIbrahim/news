import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import InsetDividers from './InsetDividers';
import ListDividers from './ListDividers';
import RecipeReviewCard from './RecipeReviewCard';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function DividerStack() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Item><InsetDividers/></Item>
        <Item><ListDividers/></Item>
        <Item><RecipeReviewCard/></Item>
      </Stack>
    </div>
  );
}
