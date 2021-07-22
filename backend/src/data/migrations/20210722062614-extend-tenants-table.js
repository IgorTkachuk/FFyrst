'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.sequelize
  .query('CREATE EXTENSION IF NOT EXISTS pgcrypto;')
  .then(() => queryInterface.sequelize.transaction(transaction => Promise.all([
    queryInterface.renameColumn('tenants', 'domainUrl', 'domain_url', { transaction }),
    queryInterface.renameColumn('tenants', 'logoUrl', 'logo_url', { transaction }),
    queryInterface.removeColumn('tenants', 'legalAddress', { transaction }),
    queryInterface.addColumn('tenants', 'support_email', {
      defaultValue: '',
      type: Sequelize.STRING
    }, { transaction }),
    queryInterface.addColumn('tenants', 'industry', {
      allowNull: false,
      type: Sequelize.INTEGER
    }, { transaction }),
    queryInterface.addColumn('tenants', 'phone_number', {
      defaultValue: '',
      type: Sequelize.STRING
    }, { transaction }),
    queryInterface.addColumn('tenants', 'invoice_address', {
      defaultValue: '',
      type: Sequelize.STRING
    }, { transaction }),
    queryInterface.addColumn('tenants', 'use_cred', {
      defaultValue: false,
      type: Sequelize.BOOLEAN
    }, { transaction }),
    queryInterface.addColumn('tenants', 'cred_url', {
      defaultValue: '',
      type: Sequelize.STRING
    }, { transaction }),
  ]))),

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((transaction) => Promise.all([
      queryInterface.renameColumn('tenants', 'logo_url', 'logoUrl', { transaction }),
      queryInterface.renameColumn('tenants', 'domain_url', 'domainUrl', { transaction }),
      queryInterface.removeColumn('tenants', 'invoice_address', { transaction }),
      queryInterface.removeColumn('tenants', 'support_email', { transaction }),
      queryInterface.removeColumn('tenants', 'phone_number', { transaction }),
      queryInterface.removeColumn('tenants', 'use_cred', { transaction }),
      queryInterface.removeColumn('tenants', 'cred_url', { transaction }),
      queryInterface.removeColumn('tenants', 'industry', { transaction }),
      queryInterface.addColumn('tenants', 'legalAddress', {
        allowNull: false,
        type: Sequelize.STRING
      }, { transaction }),
    ]));
  }
};
