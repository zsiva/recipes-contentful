import React, { ReactElement } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import LinkDrawerItem from './LinkDrawerItem';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

type AuthenticatedDrawerProps = {
  handleClose: () => void;
};

export interface DrawerItemProps {
  label: string;
  to: string;
  icon: ReactElement;
}

const drawerItems: DrawerItemProps[] = [
  {
    label: 'Add new recipe',
    to: '/add-recipe',
    icon: <NoteAddIcon />,
  },
  {
    label: 'Update recipe',
    to: '/update-recipe',
    icon: <NoteAddIcon />,
  },
  {
    label: 'Log out',
    to: '/logout',
    icon: <ExitToAppIcon />,
  },
];

export default function AuthenticatedDrawer({
  handleClose,
}: AuthenticatedDrawerProps) {
  return (
    <Drawer anchor='left' open onClose={handleClose}>
      <List>
        {drawerItems.map((item: DrawerItemProps) => (
          <LinkDrawerItem
            key={item.to}
            to={item.to}
            onClick={handleClose}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </List>
    </Drawer>
  );
}
