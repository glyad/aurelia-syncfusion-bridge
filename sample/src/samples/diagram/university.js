export class University {
    constructor() {
      let data = [
        { 'Id': 'parent', 'Role': 'University President', 'Color': '#822B86' },
        { 'Id': '1', 'Role': 'Chancellor', 'Supervision': 'parent', 'Color': '#3c418B' },
        { 'Id': '2', 'Role': 'Vice President', 'Supervision': 'parent', 'Color': '#3c418B' },
        { 'Id': '3', 'Role': 'Student Affairs', 'Supervision': '2', 'ChartType': 'left', 'Color': '#3c418B' },
        { 'Id': '4', 'Role': 'Admin & Finance', 'Supervision': '2', 'Color': '#3c418B' },
        { 'Id': '5', 'Role': 'Academics', 'Supervision': '2', 'Color': '#3c418B' },
        { 'Id': '6', 'Role': 'External Relations', 'Supervision': '2', 'ChartType': 'right', 'Color': '#3c418B' },
        { 'Id': '7', 'Role': 'Activities and Special events', 'Supervision': '3', 'Color': '#267011' },
        { 'Id': '8', 'Role': 'Educational Service Center', 'Supervision': '3', 'Color': '#267011' },
        { 'Id': '9', 'Role': 'Health Care', 'Supervision': '3', 'Color': '#267011' },
        { 'Id': '10', 'Role': 'Housing and Food Service Center', 'Supervision': '3', 'Color': '#267011' },
        { 'Id': '11', 'Role': 'Students Development', 'Supervision': '3', 'Color': '#267011' },
        { 'Id': '13', 'Role': 'General Maintenance', 'Supervision': '4', 'Color': '#267011' },
        { 'Id': '14', 'Role': 'Budget and Audit', 'Supervision': '4', 'Color': '#71AF17' },
        { 'Id': '15', 'Role': 'Human Resource', 'Supervision': '4', 'Color': '#267011' },
        { 'Id': '16', 'Role': 'Information Technology', 'Supervision': '4', 'Color': '#71AF17' },
        { 'Id': '17', 'Role': 'Facilities Management', 'Supervision': '4', 'Color': '#267011' },
        { 'Id': '117', 'Role': 'Environment Maintenance', 'Supervision': '4', 'Color': '#71AF17' },
        { 'Id': '217', 'Role': 'Custodial Service', 'Supervision': '4', 'Color': '#267011' },
        { 'Id': '18', 'Role': 'Faculties', 'Supervision': '5', 'Color': '#267011' },
        { 'Id': '19', 'Role': 'Educational Service', 'Supervision': '5', 'Color': '#71AF17' },
        { 'Id': '20', 'Role': 'University Library', 'Supervision': '5', 'Color': '#267011' },
        { 'Id': '21', 'Role': 'Center for Planning', 'Supervision': '5', 'Color': '#71AF17' },
        { 'Id': '22', 'Role': 'Summer Session', 'Supervision': '5', 'Color': '#267011' },
        { 'Id': '23', 'Role': 'Fund Development', 'Supervision': '6', 'Color': '#71AF17' },
        { 'Id': '24', 'Role': 'Admission', 'Supervision': '6', 'Color': '#71AF17' },
        { 'Id': '25', 'Role': 'Alumini Relations', 'Supervision': '6', 'Color': '#71AF17' },
        { 'Id': '12', 'Role': 'Recruitment & Promotion', 'Supervision': '6', 'Color': '#71AF17' }
      ];

      this.layout = {
        type: 'organizationalchart', marginY: 20, horizontalSpacing: 40, verticalSpacing: 40,
        getLayoutInfo: getLayoutInfo
      };
      this.pageSettings = { scrollLimit: 'diagram' };
      this.defaultSettings = {
        node: {width: 130, height: 40, shape: 'rectangle', borderColor: 'transparent', labels: [{ name: 'label1', 'margin': new ej.datavisualization.Diagram.Margin({ 'left': 5, 'right': 5 }), fontColor: '#ffffff' }]},
        connector: { segments: [{ 'type': 'orthogonal' }], targetDecorator: { shape: 'none' } }
      };
      this.nodeTemplate = nodeTemplate;
      this.tool = ej.datavisualization.Diagram.Tool.ZoomPan;
      this.snapSettings = { snapConstraints: ej.datavisualization.Diagram.SnapConstraints.None };
      this.pageSettings = { scrollLimit: 'diagram' };
      this.enableContextMenu = false;
      this.dataSourceSettings = {
        id: 'Id', parent: 'Supervision',
        dataSource: data
      };
      function nodeTemplate(diagram, node) {
        node.labels[0].text = node.Role;
        node.fillColor = node.Color;
      }
      function getLayoutInfo(diagram, node, options) {
        if (node.labels[0].text === 'University President') {
          options.assistants.push(options.children[0]);
          options.children.splice(0, 1);
        }
        if (!options.hasSubTree) {
          if (node.ChartType) {
            options.type = node.ChartType;
          }
        }
      }
    }
}
