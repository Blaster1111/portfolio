import 'package:flutter/material.dart';
import 'package:portfolio/constants/colors.dart';

class SiteLogo extends StatelessWidget {
  const SiteLogo({
    super.key,
    this.onTap,
  });

  final VoidCallback? onTap;
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Text(
        "Rudra Shukla",
        style: TextStyle(
          fontSize: 22,
          color: CustomColor.yellowPrimary,
          decoration: TextDecoration.underline,
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }
}
