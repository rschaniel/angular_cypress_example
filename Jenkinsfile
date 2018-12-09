pipeline {
    agent any

    stages {
        stage('Check') {
            steps {
                sh 'nvm list'
                sh 'nvm use default'
                sh 'node -v'
            }
        }
        stage('Build') {
            steps {
                sh 'npm build'
            }
        }
        stage('Unit Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('e2e Tests') {
            steps {
                sh 'npm run e2e'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
