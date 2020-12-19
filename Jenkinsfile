pipeline {

    agent any

    stages {

        stage('Build') {

            steps{

                echo "Build stage"
                echo "Branch name is ${BRANCH_NAME}"
                script {
                    sh 'cdk --version'
                }
            }
        }

        stage('Deploy') {

            steps {

                echo "Deploy stage"
                dir('iac') {
                    sh 'ls -l'
                }
            }
        }

        stage('Test') {

            steps {
                echo "Test stage"
            }
        }
    }
}