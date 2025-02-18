import React, { useState, useCallback } from 'react';
import ReactFlow, { Controls, Background, applyNodeChanges } from 'reactflow';
import 'reactflow/dist/style.css';
import RightSidebar from './RightSidebar';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setNodes, setEdges, deleteNode } from '../actions';
import NodePopup from './NodePopup'; // Import the popup component

const GraphComponent = () => {
  const dispatch = useDispatch();
  const nodes = useSelector((state) => state.nodes);
  const edges = useSelector((state) => state.edges);

  const [openPopup, setOpenPopup] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);

  const onConnect = useCallback((connection) => {
    dispatch(setEdges([...edges, connection])); 
  }, [edges, dispatch]);

  const onDeleteNode = (id) => {
    dispatch(deleteNode(id)); 
  };

  const onAddCard = (type) => {
    const newNode = {
      id: `${nodes.length + 1}`,
      position: { x: Math.random() * 800, y: Math.random() * 600 },
      data: {
        label: `${type === 'text' ? 'Text Message Card' : 'Question Card'}`,
        isDeletable: true,
        type: '', // Initialize with empty type
        message: '', // Initialize with empty message
      },
      sourcePosition: 'right',
      targetPosition: 'left',
      style: { width: '200px', height: '120px' },
    };

    dispatch(setNodes([...nodes, newNode]));
  };

  const onNodesChange = useCallback(
    (changes) => {
      dispatch(setNodes(applyNodeChanges(changes, nodes)));
    },
    [dispatch, nodes]
  );

  const handleNodeClick = (event, node) => {
    setSelectedNode(node); // Save the clicked node
    setOpenPopup(true); // Open the modal
  };

  const handleSaveNodeChanges = (updatedNode) => {
    if (!updatedNode.id) {
      console.error("Node id is undefined!");
      return;
    }

    const updatedNodes = nodes.map((node) =>
      node.id === updatedNode.id
        ? {
            ...node,
            data: {
              ...node.data,
              message: updatedNode.message, // Only update the message
              label: `${updatedNode.message || 'No message'}`, // Update label with message only
            },
          }
        : node
    );

    dispatch(setNodes(updatedNodes));
  };

  return (
    <div style={{ display: 'flex', position: 'relative', width: '81vw', height: '100vh', overflow: 'hidden' }}>
      <div style={{ flex: 1, height: '100vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onConnect={onConnect}
          onNodesChange={onNodesChange}
          onNodeClick={handleNodeClick} // Add event listener for node click
          style={{ width: '100%', height: '100%' }}
        >
          <Controls />
          <Background />
        </ReactFlow>
      </div>
      <RightSidebar onAddCard={onAddCard} />
      
      {/* Popup modal for node details */}
      {selectedNode && (
        <NodePopup
          open={openPopup}
          handleClose={() => setOpenPopup(false)}
          nodeData={selectedNode} // Pass the complete node object
          handleSave={handleSaveNodeChanges}
        />
      )}
    </div>
  );
};

export default GraphComponent;
