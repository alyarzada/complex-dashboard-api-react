import { Box, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../services/postsReqs";
import { useScrollToUp } from "../../hooks/useScrollToUp";

import PageHeader from "./PageHeader";
import NavigationPanel from "./NavigationPanel";
import LeafletMap from "./LeafletMap";
import { Outlet } from "react-router-dom";

const ComplexPanel = () => {
  useScrollToUp();

  const { data: posts, isLoading: loading } = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });

  return (
    <Box className="flex flex-col items-center">
      <Box className="w-full">
        <PageHeader posts={posts} />
        <Box>
          <Stack
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="space-between"
          >
            <Box className="w-full md:w-[40%]">
              <NavigationPanel />
              <LeafletMap />
            </Box>

            <Box className="w-full md:w-[58%]">
              <Outlet context={[posts, loading]} />
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default ComplexPanel;
