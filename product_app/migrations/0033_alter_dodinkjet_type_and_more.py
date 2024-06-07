# Generated by Django 4.2.7 on 2023-12-26 22:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product_app', '0032_alter_cijinkjet_type_alter_dodinkjet_type_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dodinkjet',
            name='type',
            field=models.CharField(choices=[('p2128', 'p2128'), ('EVO', 'EVO'), ('bicolor', 'bicolor')], max_length=50),
        ),
        migrations.AlterField(
            model_name='reciprocatingcompressor',
            name='type',
            field=models.CharField(choices=[('oil_injected', 'oil_injected'), ('oil_free', 'oil_free')], max_length=50),
        ),
        migrations.AlterField(
            model_name='rotaryscrewcompressor',
            name='type',
            field=models.CharField(choices=[('oil_injected', 'oil_injected'), ('oil_free', 'oil_free')], max_length=50),
        ),
    ]
