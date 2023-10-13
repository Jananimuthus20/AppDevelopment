import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { getUserExpense } from '../service/api';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF6663', '#66FF91'];
const Graph = ({ data }) => {
    const [categoryData, setCategoryData] = useState([]);
  const [expenses, setExpenses] = useState([]);

  
  useEffect(() => {
    async function fetchData() {
      try {
        const userId = localStorage.getItem('xuserId');
        const response = await getUserExpense(userId);
        const expensesData = response.data;
        
        // Process the expenses data and calculate category counts
        const counts = {};

        expensesData.forEach((item) => {
          const { category,expAmount } = item;
          if (counts[category]) {
            counts[category]+=expAmount;
          } else {
            counts[category] = expAmount;
          }
        });

        // Convert counts into categoryData for the pie chart
        const categoryData = Object.entries(counts).map(([name, value], index) => ({
          name,
          value,
          fill: COLORS[index % COLORS.length],
        }));

        // Set both expenses and categoryData states
        setExpenses(expensesData);
        setCategoryData(categoryData);
      } catch (error) {
        console.error('Error fetching and processing data:', error);
      }
    }

    fetchData();
  }, []);


    return (
        <div>
        <PieChart width={400} height={400}>
          <Pie
            data={categoryData}
            dataKey="value" // Use "value" instead of "count"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {categoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        </div>
      );
    };
    

export default Graph
