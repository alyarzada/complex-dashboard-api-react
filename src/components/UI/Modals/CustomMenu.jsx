import { useEffect, forwardRef, useRef } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { motion } from "framer-motion";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const CustomMenu = forwardRef(
  (
    {
      children,
      setOpenMenu,
      onDelete,
      onEdit,
      editDelete,
      className = "top-8 right-2 w-40",
    },
    ref
  ) => {
    const menuRef = useRef(null);

    useEffect(() => {
      const handleMenu = (e) => {
        if (
          !e?.composedPath()?.includes(menuRef.current) &&
          !e?.composedPath()?.includes(ref.current)
        ) {
          setOpenMenu(false);
        }
      };
      document.addEventListener("mousedown", handleMenu);

      return () => document.removeEventListener("mousedown", handleMenu);
    }, []);

    return (
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.2,
          type: "spring",
          damping: 25,
          stiffness: 500,
        }}
        ref={menuRef}
        className={`${className} absolute z-40 rounded bg-bgLight text-black  dark:bg-bgMain dark:text-white drop-shadow-lg
        `}
      >
        {editDelete ? (
          <List>
            <ListItem onClick={onEdit} className="p-0">
              <ListItemButton className="py-0 px-2">
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>
                <ListItemText primary="Düzəlt" />
              </ListItemButton>
            </ListItem>
            <ListItem onClick={onDelete} className="p-0">
              <ListItemButton className="py-0 px-2">
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText primary="Sil" />
              </ListItemButton>
            </ListItem>
          </List>
        ) : (
          children
        )}
      </motion.div>
    );
  }
);

export default CustomMenu;
