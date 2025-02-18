export const setNodes = (nodes) => ({
    type: 'SET_NODES',
    payload: nodes,
  });
  
  export const setEdges = (edges) => ({
    type: 'SET_EDGES',
    payload: edges,
  });
  
  export const deleteNode = (id) => ({
    type: 'DELETE_NODE',
    payload: id,
  });
  