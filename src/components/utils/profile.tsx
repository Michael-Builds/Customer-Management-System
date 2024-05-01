import { Menu, Button, Text, rem } from "@mantine/core";
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from "@tabler/icons-react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Profile = () => {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <div>
          <MdOutlineKeyboardArrowDown className="h-5 w-5 text-gray-500 cursor-pointer" />
        </div>
      </Menu.Target>

      <Menu.Dropdown className="mt-3">
        <Menu.Item
          leftSection={
            <IconMessageCircle style={{ width: rem(14), height: rem(14) }} />
          }
        >
          My Account
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconSettings style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Settings
        </Menu.Item>

        <Menu.Item
          leftSection={
            <IconPhoto style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Gallery
        </Menu.Item>
        <Menu.Divider />

        <Menu.Item
          color="red"
          leftSection={
            <IconTrash style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
export default Profile;
