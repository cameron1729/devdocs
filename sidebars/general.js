/**
 * Copyright (c) Moodle Pty Ltd.
 *
 * Moodle is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Moodle is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Moodle.  If not, see <http://www.gnu.org/licenses/>.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
/** @type {import('@docusaurus/plugin-content-docs/src/types').NormalizedSidebarItem} */
/** @type import('@site/src').ProjectSummaryData */

const ProjectList = require('../data/projects.json').projects;
const getReleaseNotes = require('./releaseNotes');

const sidebars = {
    community: [
        'community/intro',
        'community/mission',
        'community/contribute',
        'community/roadmap',
        'community/channels',
        {
            label: 'Meetings',
            type: 'category',
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'community/meetings',
                },
            ],
            link: {
                type: 'doc',
                id: 'community/meetings',
            },
        },
        'community/research',
        {
            label: 'Credits',
            type: 'category',
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'community/credits',
                },
            ],
            link: {
                type: 'doc',
                id: 'community/credits',
            },
        },
    ],

    process: [
        {
            label: 'Process',
            type: 'category',
            items: [
                {
                    label: 'Triage',
                    type: 'doc',
                    id: 'development/process/triage',
                },
                {
                    label: 'Development',
                    type: 'doc',
                    id: 'development/index',
                },
                'development/process/peer-review',
                {
                    label: 'Integration review',
                    type: 'category',
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'development/process/integration',
                        },
                    ],
                    link: {
                        type: 'doc',
                        id: 'development/process/integration-review',
                    },
                },
                {
                    label: 'Testing',
                    type: 'category',
                    items: [
                        {
                            label: 'Instructions guide',
                            type: 'doc',
                            id: 'development/process/testing/guide',
                        },
                        {
                            label: 'Integrated issues',
                            type: 'doc',
                            id: 'development/process/testing/integrated-issues',
                        },
                        {
                            label: 'Quality Assurance (QA)',
                            type: 'doc',
                            id: 'development/process/testing/qa',
                        },
                    ],
                    link: {
                        type: 'doc',
                        id: 'development/process/testing',
                    },
                },
                {
                    label: 'Translation',
                    type: 'category',
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'development/process/translation',
                        },
                    ],
                    link: {
                        type: 'doc',
                        id: 'development/process/translation',
                    },
                },
                {
                    label: 'Release',
                    type: 'category',
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'development/process/release',
                        },
                    ],
                    link: {
                        type: 'doc',
                        id: 'development/process/release',
                    },
                },
                {
                    label: 'Security',
                    type: 'category',
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'development/process/security',
                        },
                    ],
                    link: {
                        type: 'doc',
                        id: 'development/process/security',
                    },
                },
            ],
            link: {
                type: 'doc',
                id: 'development/process',
            },
        },
        {
            label: 'Moodle App Process',
            type: 'doc',
            id: 'development/process-moodleapp',
        },
        {
            label: 'Tracker',
            type: 'category',
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'development/tracker',
                },
            ],
            link: {
                type: 'doc',
                id: 'development/tracker',
            },
        },
    ],

    coding: [
        {
            label: 'Getting started',
            type: 'doc',
            id: 'development/gettingstarted',
        },
        {
            label: 'Policies',
            type: 'category',
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'development/policies',
                },
            ],
            link: {
                type: 'doc',
                id: 'development/policies',
            },
        },
        {
            label: 'Tools',
            type: 'category',
            items: [
                'development/tools/mdk',
                'development/tools/phpcs',
                'development/tools/nodejs',
                'development/tools/cibot',
            ],
            link: {
                type: 'doc',
                id: 'development/tools/index',
            },
        },
    ],

    documentation: [
        'documentation/index',
        'documentation/contributing',
        'documentation/code-of-conduct',
        'documentation/style-guides',
    ],

    releaseNotes: [
        getReleaseNotes(),
        {
            type: 'html',
            value: '<hr>',
        },
        {
            label: 'Moodle App Releases',
            type: 'category',
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'app_releases',
                },
            ],
            link: {
                type: 'doc',
                id: 'app_releases',
            },
        },
    ],
};

const activeStates = [
    'In Progress',
    'Pending',
];

const completeStates = [
    'Complete',
];

const abandonedStates = ['Abandoned'];

const allProjects = Object.entries(ProjectList).map(([key, value]) => {
    value.key = key;
    return value;
});

/**
 * Fetch all projects matching the list of states.
 *
 * @param {Array<string>} states
 * @returns {Array<ProjectSummaryData>}
 */
const getProjectsWithStates = (states) => allProjects.filter((project) => states.indexOf(project.status) !== -1);

/**
 * Convert a list of rpojects to a list of normalised sidebar item.
 *
 * @param {Array<ProjectSummaryData>} projects
 * @returns {Array<NormalizedSidebarItem>}
 */
const convertProjectToSidebarConfig = (projects) => projects.map((project) => ({
    label: project.title,
    type: 'doc',
    id: `projects/${project.key}`,
}));

sidebars.projects = [{
    label: 'Projects',
    type: 'category',
    items: [
        {
            label: 'Active',
            type: 'category',
            items: convertProjectToSidebarConfig(getProjectsWithStates(activeStates)),
            collapsed: false,
        },
        {
            label: 'Complete',
            type: 'category',
            items: convertProjectToSidebarConfig(getProjectsWithStates(completeStates)),
        },
        {
            label: 'Abandoned',
            type: 'category',
            items: convertProjectToSidebarConfig(getProjectsWithStates(abandonedStates)),
        },
    ].filter((sidebar) => sidebar.items.length > 0),
    link: {
        type: 'doc',
        id: 'projects/index',
    },
}];

module.exports = sidebars;
