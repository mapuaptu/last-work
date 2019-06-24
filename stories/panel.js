import { storiesOf } from '@storybook/vue';
import { Panel } from '../src/index';

export default () =>
  storiesOf('Panel', module).add('default', () => ({
    components: {
      'dd-panel': Panel,
    },
    data() {
      return {
        list: [
          {
            id: '1',
            task: {
              header: 'Task',
              avatar: 'https://i.pravatar.cc/55',
              title: 'Rechnung schreiben für Kunde Alexander Christ',
            },
            project: {
              header: 'Project',
              name: 'Website redesign',
              menu: [
                {
                  title: 'Archive',
                  action: 'archive',
                },
                {
                  title: 'Rename',
                },
                {
                  title: 'Delete',
                },
              ],
            },
            todo: {
              header: 'To-do',
              avatar: 'https://i.pravatar.cc/300',
            },
            status: { header: 'Status', name: 'In progress' },
            start: { header: 'Start', date: '04.05.2019' },
            end: { header: 'End', date: '07.05.2019' },
          },
          {
            task: {
              header: 'Task',
              avatar: 'https://i.pravatar.cc/55',
              title: 'Rechnung schreiben für Kunde Alexander Christ',
            },
            project: {
              header: 'Project',
              name: 'Website redesign',
              menu: [
                {
                  title: 'Archive',
                },
                {
                  title: 'Rename',
                },
                {
                  title: 'Delete',
                },
              ],
            },
            todo: {
              header: 'To-to',
              avatar: 'https://i.pravatar.cc/300',
            },
            status: { header: 'Status', name: 'In progress' },
            start: { header: 'Start', date: '04.05.2019' },
            end: { header: 'End', date: '07.05.2019' },
          },
        ],
      };
    },
    template: `<dd-panel>panel
    </dd-panel>`,
  }));
