import { IoIosNotifications } from "react-icons/io";
import { Menu, rem } from "@mantine/core";
import {
  IconSettings,
  IconPhoto,
  IconMessageCircle,
} from "@tabler/icons-react";

const Notification = () => {
  return (
    <div className="relative">
      <Menu shadow="md" width={300}>
        <Menu.Target>
          <div>
          <IoIosNotifications className="h-6 w-6 text-gray-700 cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-500 transform hover:scale-100" />
            <div className="absolute -top-1 -right-1 bg-red-500 rounded-full h-4 w-4 flex items-center justify-center text-white text-xs">
              5
            </div>
          </div>
        </Menu.Target>

        <Menu.Dropdown className="mt-3">
          <Menu.Label>Today</Menu.Label>
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

          <Menu.Label>Yesterday </Menu.Label>
          <Menu.Item
            leftSection={
              <IconPhoto style={{ width: rem(14), height: rem(14) }} />
            }
          >
            Gallery
          </Menu.Item>
          <Menu.Divider />
          <div className="text-center justify-center align-center cursor-pointer">
            <p className="text-sm p-1 text-blue-400">View All</p>
          </div>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default Notification;
