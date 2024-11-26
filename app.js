const users = [];
const roles = [];

function showTab(tab) {
  document.getElementById('usersTab').style.display = tab === 'users' ? 'block' : 'none';
  document.getElementById('rolesTab').style.display = tab === 'roles' ? 'block' : 'none';
}

function renderUserTable() {
  const userTable = document.getElementById('userList');
  userTable.innerHTML = '';
  users.forEach((user, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.roles.join(', ')}</td>
      <td>${user.status}</td>
      <td>
        <button class="action-button" onclick="editUser(${index})">Edit</button>
        <button class="action-button delete" onclick="deleteUser(${index})">Delete</button>
      </td>
    `;
    userTable.appendChild(row);
  });
}

function renderRoleTable() {
  const roleTable = document.getElementById('roleList');
  roleTable.innerHTML = '';
  roles.forEach((role, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${role.name}</td>
      <td>${role.permissions.join(', ')}</td>
      <td>
        <button class="action-button" onclick="editRole(${index})">Edit</button>
        <button class="action-button delete" onclick="deleteRole(${index})">Delete</button>
      </td>
    `;
    roleTable.appendChild(row);
  });
}

function showUserForm() {
  const name = prompt("Enter user name:");
  const email = prompt("Enter user email:");
  const roles = prompt("Enter user roles (comma separated):").split(',');
  const status = prompt("Enter user status (Active/Inactive):");

  users.push({ name, email, roles, status });
  renderUserTable();
}

function deleteUser(index) {
  users.splice(index, 1);
  renderUserTable();
}

function editUser(index) {
  const user = users[index];
  const name = prompt("Edit user name:", user.name);
  const email = prompt("Edit user email:", user.email);
  const roles = prompt("Edit user roles (comma separated):", user.roles.join(',')).split(',');
  const status = prompt("Edit user status (Active/Inactive):", user.status);

  users[index] = { name, email, roles, status };
  renderUserTable();
}

function showRoleForm() {
  const name = prompt("Enter role name:");
  const permissions = prompt("Enter role permissions (comma separated):").split(',');

  roles.push({ name, permissions });
  renderRoleTable();
}

function deleteRole(index) {
  roles.splice(index, 1);
  renderRoleTable();
}

function editRole(index) {
  const role = roles[index];
  const name = prompt("Edit role name:", role.name);
  const permissions = prompt("Edit role permissions (comma separated):", role.permissions.join(',')).split(',');

  roles[index] = { name, permissions };
  renderRoleTable();
}
