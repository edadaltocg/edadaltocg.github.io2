import { publish } from 'gh-pages';

publish(
    'build',
    {
        branch: 'master',
        repo: 'https://github.com/edadaltocg/edaadaltocg.github.io',
        user: {
            name: 'Eduardo Dadalto',
            email: 'edadaltocg@gmail.com'
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);