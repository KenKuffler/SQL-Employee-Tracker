import inquirer from 'inquirer';
import client from './db';  // Make sure the db connection file is correct
import {
  viewAllDepartments,
  viewAllRoles,
  viewAllEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
  updateEmployeeManager,
  viewEmployeesByManager,
  viewEmployeesByDepartment,
  deleteDepartment,
  deleteRole,
  deleteEmployee,
  viewDepartmentBudget
} from './queries';  // Import all functions from queries.ts

// Main menu prompt and handler
async function mainMenu() {
  try {
    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Update an employee manager',
          'View employees by manager',
          'View employees by department',
          'Delete a department',
          'View department budget',
          'Exit'
        ]
      }
    ]);

    // Switch to handle each user choice
    switch (action) {
      case 'View all departments':
        console.log('User selected: View all departments');
        await viewAllDepartments();
        break;
      case 'View all roles':
        console.log('User selected: View all roles');
        await viewAllRoles();
        break;
      case 'View all employees':
        console.log('User selected: View all employees');
        await viewAllEmployees();
        break;
      case 'Add a department':
        console.log('User selected: Add a department');
        await addDepartment();
        break;
      case 'Add a role':
        console.log('User selected: Add a role');
        await addRole();
        break;
      case 'Add an employee':
        console.log('User selected: Add an employee');
        await addEmployee();
        break;
      case 'Update an employee role':
        console.log('User selected: Update an employee role');
        await updateEmployeeRole();
        break;
      case 'Update an employee manager':
        console.log('User selected: Update an employee manager');
        await updateEmployeeManager();
        break;
      case 'View employees by manager':
        console.log('User selected: View employees by manager');
        await viewEmployeesByManager();
        break;
      case 'View employees by department':
        console.log('User selected: View employees by department');
        await viewEmployeesByDepartment();
        break;
      case 'Delete a department':
        console.log('User selected: Delete a department');
        await deleteDepartment();
        break;
      case 'View department budget':
        console.log('User selected: View department budget');
        await viewDepartmentBudget();
        break;
      case 'Exit':
        console.log('Exiting the application. Goodbye!');
        client.end();  // Close the database connection before exiting
        process.exit();  // Exit the application
    }

    // Continue showing the main menu after handling the action
    await mainMenu();

  } catch (error) {
    console.error('An error occurred:', error);
    await mainMenu();  // Return to main menu in case of error
  }
}

// Connect to the database and start the application
client.connect()
  .then(() => {
    console.log('Connected to the database.');
    mainMenu();  // Start the main menu
  })
  .catch((error) => {
    console.error('Failed to connect to the database:', error);
  });