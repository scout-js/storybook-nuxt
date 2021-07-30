<template>
  <div>
    <DeklinationTables />
    <KonjugationTables />
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  ul,
  ul li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .accordion-tables_group {
    overflow: hidden;
    position: relative;
  }

  .accordion-table {
    overflow-x: scroll;
    border-top: 3px solid #ffd008;
  }

  .accordion-tables_header {
    background-color: #fff6d0;
    min-height: 60px;
    line-height: 26px;
    font-size: 26px;
    font-weight: bold;
    color: #333;
    border-bottom: 3px solid #FCD027;
    padding: 10px 15px;
    margin-bottom: -3px;
    display: flex;
    align-items: center;
  }

  .accordion--list {
    &.sidebar-column {
      border-right: 1px solid #dadee0;
      font-weight: bold;

      &.dashed {
        border-right: 1px dashed #dadee0;
      }
    }
  }

  .accordion--item {
    font-size: 15px;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #333;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #dadee0;
    padding: 0 15px;
    box-sizing: border-box;
    white-space: nowrap;

    &:first-child,
    &.heading {
      text-transform: capitalize;
      font-weight: bold;
      font-size: 18px;
      height: 44px;
      line-height: 44px;
      border-bottom: none;
      background-color: #eff3f5;
    }

    &:nth-child(odd) {
      background-color: #eff3f5;
    }
  }

  .conjugation {
    .accordion-table {
      display: grid;
      grid-template-columns: 100px auto;
    }

    .accordion--list {
      &.content-column {
        .accordion--item {
          &:first-child {
            z-index: 2;
            transform: translateX(-100px);
            width: calc(100% + 100px);
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    .accordion-table {
      display: grid;
      grid-template-columns: 100px minmax(max-content, auto);
      margin-bottom: 40px;
    }

    .accordion--list {
      &.content-column {
        .accordion--item {
          &:first-child {
            position: absolute;
            width: 100%;
          }

          &:nth-child(2) {
            margin-top: 44px;
          }
        }
      }

      &.sidebar-column {
        position: sticky;
        left: -0.5px;
        background: #fff;
        z-index: 1;
      }
    }
  }

  @media (min-width: 601px) {
    .conjugation {
      .accordion-tables_group {
        margin-bottom: 40px;
      }

      .accordion-table {
        grid-template-columns: 100px minmax(max-content, auto);

        &:first-child {
          border-right: 1px solid #dadee0;
        }
      }
    }
  }

  @media (min-width: 601px) and (max-width: 1160px) {
    .accordion-tables_group {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 40px;
    }

    .accordion-table {
      &.table--maskulin,
      &.table--neutrum {
        display: grid;
        grid-template-columns: 100px 1fr;
        border-right: 1px solid #dadee0;
      }

      &.table--femininum,
      &.table--plural {
        display: grid;
        grid-template-columns: 1fr;

        .sidebar-column {
          display: none;
        }
      }
    }
  }

  @media (min-width: 1161px) {
    .accordion-tables_group {
      display: grid;
      grid-template-columns: repeat(2, auto);
    }

    .accordion-table {
      &.table--maskulin {
        display: grid;
        grid-template-columns: 100px 1fr;
      }

      &.table--maskulin,
      &.table--neutrum,
      &.table--femininum {
        border-right: 1px solid #dadee0;
      }

      &.table--neutrum,
      &.table--femininum,
      &.table--plural {
        display: grid;
        grid-template-columns: 1fr;

        .sidebar-column {
          display: none;
        }
      }
    }

    .deklination {
      .accordion-tables {
        display: grid;
        grid-template-columns: repeat(2, auto);
      }
    }

    .conjugation {
      .accordion-tables_group {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: 40px;
      }
    }
  }
</style>

