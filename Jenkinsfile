pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm i'
            }
        }
        stage('Build') {
            steps {
                sh 'node -v'
                sh 'npm run build'
            }
        }
        stage('Unit Tests') {
            steps {
                sh 'npm run test'
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
