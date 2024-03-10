resource "aws_iam_role" "eks-fargate-profile" {
  name = "eks-fargate-profile"

  assume_role_policy = jsonencode({
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "eks-fargate-pods.amazonaws.com"
      }
    }]
    Version = "2012-10-17"
  })
}

resource "aws_iam_role_policy_attachment" "eks-fargate-profile" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSFargatePodExecutionRolePolicy"
  role       = aws_iam_role.eks-fargate-profile.name
}

# resource "aws_eks_fargate_profile" "kube-system" {
#   cluster_name           = aws_eks_cluster.cluster.name
#   fargate_profile_name   = "kube-system"
#   pod_execution_role_arn = aws_iam_role.eks-fargate-profile.arn

#   subnet_ids = [
#     aws_subnet.private-us-east-1a.id,
#     aws_subnet.private-us-east-1b.id
#   ]

#   selector {
#     namespace = "kube-system"
#   }
# }

resource "aws_iam_role" "nbau-app" {
  name = "nbau-app"

  assume_role_policy = jsonencode({
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "ec2.amazonaws.com"
      }
    }]
    Version = "2012-10-17"
  })
}

resource "aws_iam_role_policy_attachment" "nbau-app-AmazonEKSWorkerNodePolicy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy"
  role       = aws_iam_role.nbau-app.name
}

resource "aws_iam_role_policy_attachment" "nbau-app-AmazonEKS_CNI_Policy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy"
  role       = aws_iam_role.nbau-app.name
}

resource "aws_iam_role_policy_attachment" "nbau-app-AmazonEC2ContainerRegistryReadOnly" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
  role       = aws_iam_role.nbau-app.name
}

resource "aws_eks_node_group" "app" {
  cluster_name    = aws_eks_cluster.cluster.name
  node_group_name = "app"
  node_role_arn   = aws_iam_role.nbau-app.arn
  subnet_ids      = [
    aws_subnet.private-us-east-1a.id,
    aws_subnet.private-us-east-1b.id
  ]

  scaling_config {
    desired_size = 1
    max_size     = 1
    min_size     = 1
  }

  depends_on = [
    aws_iam_role_policy_attachment.nbau-app-AmazonEKSWorkerNodePolicy,
    aws_iam_role_policy_attachment.nbau-app-AmazonEKS_CNI_Policy,
    aws_iam_role_policy_attachment.nbau-app-AmazonEC2ContainerRegistryReadOnly,
  ]
}