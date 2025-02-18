import './App.css';
import { Container, createTheme, CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { featuredPosts as initialPosts } from './Data/Data';
import PostCard from './components/PostCard';
import Main from './components/Main';
import Footer from './components/Footer';
import FeaturePost from './components/FeaturePost';
import SideDrawer from './components/SideDrawer'; // Import the sidebar
import GraphPage from './components/GraphComponent';
import { Provider } from 'react-redux'; // Import the Provider from 'react-redux'
import store from './store'; // Import the store

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const [posts, setPosts] = useState(initialPosts);

  const onDragEnd = (result) => {
    if (!result.destination) return; // Exit if dropped outside

    const items = Array.from(posts);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setPosts(items);
  };

  return (
    <Provider store={store}> 
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
          <SideDrawer /> 

          <Header />
          <Container>
            <Routes>
              <Route path="/graph" element={<GraphPage />} />

              <Route
                path="/"
                element={
                  <>
                    <FeaturePost />
                    <br />

                    <DragDropContext onDragEnd={onDragEnd}>
                      <Droppable droppableId="posts-list">
                        {(provided) => (
                          <Grid container spacing={4} {...provided.droppableProps} ref={provided.innerRef}>
                            {posts.map((post, index) => (
                              <Draggable key={index} draggableId={index.toString()} index={index}>
                                {(provided) => (
                                  <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    sx={{
                                      cursor: 'grab', 
                                      userSelect: 'none',
                                    }}
                                  >
                                    <PostCard post={post} />
                                  </Grid>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </Grid>
                        )}
                      </Droppable>
                    </DragDropContext>

                    <Grid container spacing={5} sx={{ marginTop: 3 }}>
                      <Grid item xs={12}>
                        <Main title="From the firehose" />
                      </Grid>
                    </Grid>
                  </>
                }
              />
            </Routes>
          </Container>
        </Router>
      </ThemeProvider>
    </Provider> 
  );
}

export default App;
