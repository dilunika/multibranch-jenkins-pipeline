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
                    script {
                        sh 'ls -l'
                        def env = deriveEnvironmentFromBranchName(BRANCH_NAME)
                        echo "Deploy environment ${env}"
                    }

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

def deriveEnvironmentFromBranchName(String branch) {

    if(branch.startsWith('sandbox')) {

        def details = branch.split('/')[1]
        def env = details.split('-')[0]

        return env

    } else {
        return 'dev'
    }
}