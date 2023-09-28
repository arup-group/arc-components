<template>
  <arc-container>
    <arc-navbar
      slot="nav"
      logo="/arc-red.svg"
      tabs="0"
    >
      <span slot="name">Web Components</span>

      <arc-icon-button
        label="Home"
        name="home"
      />
      <arc-icon-button
        label="Settings"
        name="settings"
      />

      <arc-sso
        slot="user"
        client-id="b4a4c03f-4915-42db-aa79-d49a650974c2"
        tenant-id="4ae48b41-0137-4599-8661-fc641fe77bea"
      />
    </arc-navbar>

    <section id="playground" />
  </arc-container>
</template>
