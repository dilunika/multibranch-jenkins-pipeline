pipeline {

    agent any
    options {
        ansiColor('xterm')
        timestamps()
        parallelsAlwaysFailFast()
    }

    stages {

        stage('Build') {
            echo "Build stage"
            echo "Branch name is ${BRANCH_NAME}"
            script {
                sh 'cdk --version'
            }
        }

        stage('Deploy') {
            echo "Deploy stage"
            dir('iac') {
                sh 'ls -l'
            }
        }

        stage('Deploy') {
            echo "Test stage"
        }
    }
}